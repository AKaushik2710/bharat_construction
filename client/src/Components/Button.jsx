
export default function Button(props){
    const {cn, children, onClick, type="button"} = props;
    return <button onClick={onClick} type={type} className={cn}>{children}</button>
}