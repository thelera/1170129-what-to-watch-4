import NameSpace from "../name-space";

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

const getAvatarURL = (state) => state[NameSpace.USER].avatarURL;

export {getAuthorizationStatus, getAvatarURL};
