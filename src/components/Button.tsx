export const Button = (props: {title: string, click?: ()=>void}) => {
    return (
        <button onClick={props.click}>{props.title}</button>
    )
}