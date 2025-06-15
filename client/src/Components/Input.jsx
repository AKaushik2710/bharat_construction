
export default function Input(props){
    const {ref, cnLabel, cnInput, holder, label, labelText} = props;
    return <>
    <label htmlFor={label} className={cnLabel}>{labelText}</label>
    <input placeholder={holder} name={label} id={label} className={cnInput} ref={ref}></input>
    </>
}