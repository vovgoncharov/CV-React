const Title = (props) => {
    const {children,className,...rest} = props
  return <>
     <h2 className={className} {...rest}>{children}</h2>
  </>;
};
export default Title;
