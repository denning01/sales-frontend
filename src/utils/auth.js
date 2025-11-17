export const normalizeUserPayload = (raw) => {
  if (!raw) return null;

  // If already normalized (token + no nested user object)
  if (raw.token && !raw.user) {
    const normalized = { ...raw };
    if (!normalized.id) {
      normalized.id =
        raw.user_id ??
        raw.owner_id ??
        raw.userId ??
        raw.ownerId ??
        raw.id ??
        null;
    }
    if (!normalized.username) {
      normalized.username =
        raw.email ??
        raw.name ??
        raw.user_name ??
        raw.username ??
        null;
    }
    return normalized;
  }

  const profile = raw.user || {};
  const normalized = {
    token: raw.access_token || raw.token || null,
    ...profile,
  };

  if (!normalized.id) {
    normalized.id =
      profile.id ??
      profile.user_id ??
      profile.owner_id ??
      profile.userId ??
      profile.ownerId ??
      raw.user_id ??
      null;
  }

  if (!normalized.username) {
    normalized.username =
      profile.username ??
      profile.email ??
      profile.name ??
      raw.username ??
      null;
  }

  return normalized;
};

