import {TailSpin} from "react-loader-spinner";
import './Loader.scss';

const Loader = () => {
    return  (
            <TailSpin
                visible={true}
                height="60"
                width="60"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass="loader"
            />
    )
}
export default Loader