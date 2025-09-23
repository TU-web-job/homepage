import Admin from "./Admin";
import Member from "./Member";
import MemberConfirm from "./MemberConfirm";

export default function admin(){
    return(
        <>
        <Admin />
        <MemberConfirm />
        <Member />
        </>
    );
}