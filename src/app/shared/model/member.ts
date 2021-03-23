import { Base } from "./base";

export class Member extends Base {
    memberName: String;
    statusCode: String;
    statusType: String;
    initialStockPurchaseRequired: boolean;
    initalStockPurchaseDate: Date;
    votingState: boolean;
    memberDdaAccount: Number;
    capitalStockAsset: Number;
    capitalStockAssetDate: Date;
    pendingStockAsset: Number;
    pendingStockAssetDate: Date;
    memberStockAssetDate: Date;
    memberStockMaxRequirement: String;
    mrcs: String;
    mrcsInputDate: Date;
    mrcsRedemptionDate: Date;
    memberDirectorFirstName: String;
    memberDirectorLastName: String;
    memberDirectorTitle: String;
    memberDirectorStartDate: Date;
    memberDirectorEndDate: Date;
    disappearingMemberNumber: Number;
    survivingMemberNUmber: Number;
    memberToMemberMergeDate: Date;
}
