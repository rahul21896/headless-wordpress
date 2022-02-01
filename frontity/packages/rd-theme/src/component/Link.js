import { connect, styled } from "frontity";

const Anchor = styled.a`
    text-decoration:none;
    text-transform:uppercase;
  ${props =>
    props.isActive
        ? "color: #00adb5 !important"
        : "color: #000000"};
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