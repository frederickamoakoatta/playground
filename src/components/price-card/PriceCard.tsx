import './PriceCard.scss';
import check from "../../assets/check.svg";
import cancel from "../../assets/cancel.svg";
import Button from "../button/Button";
import ButtonColors from "../button/ButtonColors";
import Badge from "../badge/Badge";

interface FeatureProps {
    name: string,
    state: boolean,
}


interface PricingCardProps {
    name: string,
    price: string,
    duration: 'month' | 'yearly',
    features: Array<FeatureProps>,
    isRecommended ?: boolean,
}

const PriceCard = ({name, price, duration, features, isRecommended }: PricingCardProps) => {

    return (
        <div className={'price-card'}>
            <div className={'price-card-heading'}>
                <div className="price-card-group">
                    <p className="price-card-name">{name}</p>
                    {isRecommended && <Badge text={'Recommended'}/>}
                </div>
                <div className={'price-card-sub-group'}>
                    <span className="price-card-price">{price}</span>
                    <span className={'spaceBtw'}/>
                    <span>{`/${duration}`}</span>
                </div>
            </div>
            <br/>
            {
                 features.map((feature, i) => {
                    return (
                        <>
                            <span className={'spaceBtw'}/>
                            <div className={'h-stack'} key={'feature-' + i}>
                                <img src={feature.state ? check : cancel} alt={'A check icon'}
                                     className={'price-card-icons'}/>
                                <span className={'spaceBtw'}/>
                                <span>{feature.name}</span>
                            </div>
                            <span className={'spaceBtw'}/>
                        </>

                    )
                })
            }
            <br/>
            <Button state={name === 'Pro' ? ButtonColors.primary : ButtonColors.neutral} isFullWidth>Start subscription</Button>
            <br/>
        </div>
    )
}
export default PriceCard;