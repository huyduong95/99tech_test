import { UserModel } from "./userModel";

export interface Credential {
    user: string;
    password: string
}

export interface Credentials {
    valid: Credential,
    invalid: Credential
}
export interface Urls {
    dashboard: string;
}

export interface Messages {
    invalid_login: string;
    required: string;
}

export interface NavItems {
    admin: string;
    pim: string;
    leave: string;
    time: string;
    recruitment: string;
    myInfo: string;
    performance: string;
    dashboard: string;
    directory: string;
    maintenance: string;
    claim: string;
    buzz: string;
}

export interface UserInformation {
    user1: UserModel;
}

export interface TestData {
    credentials: Credentials;
    urls: Urls;
    messages: Messages;
    navItems: NavItems;
    userInformation: UserInformation
}
