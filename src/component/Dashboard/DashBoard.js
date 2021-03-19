import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhoto, getComments, addComment,  addPhoto} from "../../store/actions/actions";
import {
    BrowserRouter as Router,
    Link,
    withRouter,
    
} from "react-router-dom";
const Dashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPhoto());
    }, []);

    const photoDetails = useSelector((state) => state.photosReducer.data);

    const addImageToState = (ImageUrl) => {
        dispatch(addPhoto(ImageUrl));
    }
    return (
        <div className="center">
            <div className="navbar">
                <button>
                    <img
                        className="camera"
                        src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/camera-512.png"
                        alt="camera"
                        width="15%"
                    />
                </button>
                <img
                    className="insta"
                    src="https://thepracticaldev.s3.amazonaws.com/i/9dgus6e6o80pv1gx8y7t.png"
                    alt="logo"
                    width="25%"
                />
                <button>
                    <img
                        className="send"
                        src="https://pngimage.net/wp-content/uploads/2018/06/send-button-icon-png-6.png"
                        alt="dm"
                    />{" "}
                </button>
            </div>

            <div className="profile">
                {photoDetails.length > 0 &&
                    photoDetails.map((photoDetail, index) => (
                        <>
                            <p className="photo-info">
                                <Link key={index} to="/Image" onClick={() => addImageToState(photoDetail.download_url)}><img src={photoDetail.download_url} alt="images" width="100%" /></Link>
                            </p>
                        </>
                    ))}
            </div>

            <div className="navbar2">
                <img className="bar" />
            </div>
        </div>
    );
};

export default withRouter(Dashboard);
