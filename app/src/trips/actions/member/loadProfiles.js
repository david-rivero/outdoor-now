export default function loadProfiles (profiles, members) {
  return {
    type: 'LOAD_PROFILES',
    payload: {
      profiles: profiles,
      members: members
    }
  }
}
