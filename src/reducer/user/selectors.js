import NameSpace from "../name-space.js";

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

const getAvatarURL = (state) => state[NameSpace.USER].avatarURL;

export {getAuthorizationStatus, getAvatarURL};
