import { connect, styled } from "frontity";

const Anchor = styled.a`
    text-decoration:none;
    text-transform:uppercase;
  ${props =>
    props.isActive
        ? "color: steelblue !important"
        : "color: white"};
`;


const Link = ({ href, isActive , actions, children }) => {
    return (
        <div>
            <Anchor isActive={isActive} href={href} onClick={event => {event.preventDefault();actions.router.set(href);}}>
                {children}
            </Anchor>
        </div>
    );
};

export default connect(Link);