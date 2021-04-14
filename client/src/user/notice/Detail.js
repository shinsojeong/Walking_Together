import React,{useEffect} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {selectNotice} from '../../modules/notice';
import TopBar from '../../utils/TopBar';

function Detail() {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    let view = useSelector(state => state.noticeReducer.selectedNotice);

    useEffect(() => {
        dispatch(selectNotice(location.state.noticeId))
    },[dispatch, location.state.noticeId])

    //param function
    function goBack() {
        history.goBack()
    }

    return (
        <div>
            <TopBar 
            left="null" 
            center={{title : view.title, data : view.createTime}} 
            right="cancel" 
            lfunc={null}
            rfunc={goBack}
            size="big"/>

            <div id="notice">
                <div className = "thumbnail">
                    <img src = {view.imageFiles} alt="noticeImage"/>
                </div>
                <div className = "content">
                    {view.content}
                </div>
            </div>
        </div>
    )
}

export default Detail
