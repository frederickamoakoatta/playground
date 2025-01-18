import Button from "../button/Button";
import bellIcon from "../../assets/bell.svg";
import userIcon from "../../assets/user-shield-alt.svg";
import menuIcon from "../../assets/burger-menu.svg";
import userImgIcon from "../../assets/user.jpg";
import appleIcon from "../../assets/apple-log.svg";
import ButtonColors from "../button/ButtonColors";
import './Header.scss'

interface HeaderActionsProps {
    actionType: 'style1' | 'style2' | 'style3' | 'style4';
}

const HeaderActions = ({actionType}: HeaderActionsProps) => {
    return (
        <>
            {
                actionType === 'style1' ?
                    <div className={'h-stack'}>
                        <Button state={ButtonColors.neutral}>Docs</Button>
                        <span className={'spaceBtw'}/>
                        <Button state={ButtonColors.primary}>Primary</Button>
                    </div> :
                    actionType === 'style2' ?
                        <div className={'h-stack'}>
                            <img src={bellIcon} alt="bell Icon" className={'header-icons'}/>
                            <span className={'spaceBtw'}/>
                            <img src={userIcon} alt="user Icon" className={'header-icons'}/>
                            <span className={'spaceBtw'}/>
                            <img src={menuIcon} alt="menu Icon" className={'header-icons'}/>
                        </div> :
                        actionType === 'style3' ?
                            <div className={'h-stack'}>
                                <img src={userImgIcon} alt="user avatar" className={'header-avatar'}/>
                                <span className={'spaceBtw'}/>
                                <img src={menuIcon} alt="menu Icon" className={'header-icons'}/>
                            </div> :
                            <Button state={ButtonColors.transparent}>
                                <div className={'h-stack'}>
                                    <img src={appleIcon} alt={'apple'} width={'24px'}/>
                                    <span className={'spaceBtw'}/>
                                    <div className={'btn-v-stack'}>
                                        <small>Available on the</small>
                                        <span>App Store</span>
                                    </div>
                                </div>
                            </Button>

            }
        </>
    )
}
export default HeaderActions;