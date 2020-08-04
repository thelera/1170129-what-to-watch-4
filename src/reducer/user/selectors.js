import NameSpace from "../name-space";

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

const getAvatarUrl = (state) => state[NameSpace.USER].avatarUrl;

export {getAuthorizationStatus, getAvatarUrl};
