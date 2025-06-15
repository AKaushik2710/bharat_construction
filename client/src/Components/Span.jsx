
export default function Span(props){
    const {children, cn, onClick=undefined} = props;
    return <span className={cn} onClick={onClick}>{children}</span>
}