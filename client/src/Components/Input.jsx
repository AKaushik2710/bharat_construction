
export default function Input(props){
    const {ref, cnLabel, cnInput, holder, label, labelText, onInput=undefined, type="text"} = props;
    return <>
    <label htmlFor={label} className={cnLabel}>{labelText}</label>
    <input placeholder={holder} name={label} id={label} type={type} onInput={onInput} className={cnInput} ref={ref}></input>
    </>
}