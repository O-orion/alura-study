import style from './Relogio.module.scss'

export default function Relogio() {
    // ESSAS <> Indica um elemento pai, pois jsx sempre vai precisa
    //de um elemento pai por exemplo div entre outros
    return (
        <>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
        </>
    );
}