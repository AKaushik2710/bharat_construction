
export default function Div(props){
    const {children, cn} = props;
    return <div className={cn}>{children}</div>
}