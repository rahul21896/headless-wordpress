import {connect, styled} from "frontity";
import {RContainer} from "../../component/CommonStyle";

const R404 = styled.div`
    display:flex;
    justify-content:center;
    align-item:center;
    align-content:center;
    width:100%;
    height:80vh;
    text-align:center;
    h1{
        font-size:200px;
        color:red;
        text-transform:uppercase;
        margin:0;
        padding:0;
        font-weight:900;
    }
    span{
        color:#000;
        text-transform:uppercase;
        font-size:30px;
        font-weight:900;
    }
`;

const Page404 = ({state}) => {
    return(
        <RContainer>
            <R404>
                  <div>
                      <h1>404</h1>
                      <span>Page Not Found</span>
                  </div>
            </R404>
        </RContainer>
    );
};

export default connect(Page404);