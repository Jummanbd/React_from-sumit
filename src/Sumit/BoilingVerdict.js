export default function BoilingVerdict({celsius = 0}) {
    if(celsius > 100) {
        return <p>The water would BoilingVerdict</p>;
    }
    return <p>water would not boil.</p>;
}