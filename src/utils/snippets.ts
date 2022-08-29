import { t, tm } from ".";

export const FileNameCapitalized = "${TM_FILENAME_BASE/(.)/${1:/upcase}/}";
export const FileName = "${TM_FILENAME_BASE}";
export const First = "${1}";
export const Second = "${2}";
export const Third = "${3}";
export const PropsInterface = tm`
interface Props {}
`;
