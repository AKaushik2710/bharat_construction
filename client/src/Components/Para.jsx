
export default function Para(props){
    const {children, cn} = props;
    return <p className={cn}>{children}</p>
}