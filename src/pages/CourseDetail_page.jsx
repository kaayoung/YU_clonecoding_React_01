// import React, { useEffect } from 'react';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import { useState , useEffect } from 'react';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CurriAccordion from '../components/CourseDetail/CurriAccordion';
import DetailCurri from '../components/CourseDetail/DetailCurri';
import DetailIntro from '../components/CourseDetail/DetailIntro';
import RightCards from '../components/CourseDetail/RightCards';
import {courseDetailIntroduce } from '../data/mainCourse_data' ;

function CourseDetail_page(props) {

    const {state} = useLocation() ;
    
    // useState
    const [scrollActive , setScrollActive] = useState(false) ;
    const [scrollY , setScrollY] = useState(0) ; 

    //  useRef
    const detailIntro = useRef() ;
    const detailCurri = useRef() ;

    //  Function 
    function clickDetailNav(x) {        
        if (x.contains("courseDetailMid-nav_intro")) {
            detailIntro.current.scrollIntoView({behavior : 'smooth'}) ;
        } else if(x.contains("courseDetailMid-nav_curri")) {
            detailCurri.current.scrollIntoView({behavior : 'smooth'}) ;
        }
        
    }

    function handleScroll () {
        console.log("gogo")
        if (scrollY > 100) {
            setScrollY(window.pageYOffset) ;
            setScrollActive(true) ;                        
        } else {
            setScrollY(window.pageYOffset) ;
            scrollActive(false) ;             
        }
    }

    // useEffect 
    useEffect(() => {        
        function scrollListener () {
            window.addEventListener("scroll" , handleScroll) ;            
        }
        scrollListener() ; 
        return () => {
            window.removeEventListener("scroll" , handleScroll) ;
        } ;
        });


    return (
        <Main id='courseDetail_wholePage'>            
            <section className='courseDetail-top'>
                <div className="courseDetail-top_container flex">
                    <div className="courseDetailTop-left flex">
                        <div className="courseDetailTop-img">
                            <img src="https://cdn.inflearn.com/public/courses/329211/cover/ea485515-6665-4e5c-acd7-157c2b8b08f3/infcon-apply-main.png" alt="" />
                        </div>
                        <div className="courseDetailTop-preview flex">
                            <span><iconify-icon icon="ant-design:play-circle-outlined"></iconify-icon></span>
                            <span>2???</span>
                            <span>????????????</span>
                        </div>
                    </div>
                    <div className="courseDetailTop-right flex">
                        <div className="courseDetailTop-title_wrap flex">
                            <div>{state.topic + " > " + state.goal}</div>
                            <h2>{state.title}</h2>
                        </div>
                        <div className="courseDetailTop-info_wrap">
                            <div className="courseDetailTop-info_students">
                                <span className='courseDetailTop_rates_star'>???????????????</span>
                                <span className='courseDetailTop_rates_cnt'>({Number.parseFloat(state.rate).toFixed(1)})</span>
                                <span className='courseDetailTop_reviewCnt'> {state.reviewTotal} ?????? ?????????</span>
                                <span className='courseDetailTop_studentsCnt'>?? {courseDetailIntroduce.studentsCnt}?????? ?????????</span>
                            </div>
                            <div className="courseDetailTop-info_educator flex">
                                <span><iconify-icon icon="eva:person-outline"></iconify-icon></span>
                                <span>{state.educator}</span>
                                <span><iconify-icon icon="fa-solid:crown"></iconify-icon></span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='courseDetail-middle'>
                <div className="courseDetailMid-nav">
                    <div className={"courseDetailMid-nav_wrap flex " + (scrollActive ? "nav-sticky " : " ")} onClick={(e) => clickDetailNav(e.target.classList)}>
                    {/* <div className="courseDetailMid-nav_wrap flex" onClick={(e) => clickDetailNav(e.target.classList)}> */}
                        <span className="courseDetailMid-nav_intro detail-nav_active">????????????</span>
                        <span className="courseDetailMid-nav_curri">????????????</span>
                        <span className="courseDetailMid-nav_review">????????? <span>{state.reviewTotal}</span> </span>
                        <span className="courseDetailMid-nav_commu">????????????</span>
                        <span className="courseDetailMid-nav_news">?????????</span>                        
                    </div>
                </div>
                <div className="courseDetailMid-contents_container flex">
                    <MidLeft className="courseDetailMid-contents_left">
                        <article id='detail-intro' ref={detailIntro}>
                            <DetailIntro />
                        </article>

                        <article id='detail-curri' ref={detailCurri}>
                            <DetailCurri/>
                        </article>

                        <article id='detail-review'>
                            <DetailReview>
                                <div className="review-top">
                                    <div className="review-top_title">
                                        <h3>?????????</h3>
                                        <span>??? 200???</span>
                                    </div>
                                    <div className="review-top_text">
                                        ?????????????????? ?????? ???????????? ??????????????????. ???????????? ?????? ??? 300?????? ???????????????.
                                    </div>
                                </div>
                                <div className="review-rate">
                                    <div className="rate-left">
                                        <div className="rate_total">4.9</div>
                                        <div className="rate_stars">??????????????????????????????</div>
                                        <p>200?????? ?????????</p>
                                    </div>
                                    <div className="rate-right">
                                        <div className="rate-stick_container five-star">
                                            <span>5???</span>
                                            <div className="stick_wrap">
                                                <div className="stick_percentage"></div>
                                            </div>
                                        </div>
                                        <div className="rate-stick_container">
                                            <span>4???</span>
                                            <div className="stick_wrap">
                                                <div className="stick_percentage"></div>
                                            </div>
                                        </div>
                                        <div className="rate-stick_container">
                                            <span>3???</span>
                                            <div className="stick_wrap">
                                                <div className="stick_percentage"></div>
                                            </div>
                                        </div>
                                        <div className="rate-stick_container">
                                            <span>2???</span>
                                            <div className="stick_wrap">
                                                <div className="stick_percentage"></div>
                                            </div>
                                        </div>
                                        <div className="rate-stick_container">
                                            <span>1???</span>
                                            <div className="stick_wrap">
                                                <div className="stick_percentage"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="review-list">
                                    <div className="list-sort">
                                        <div className="list-sort_container">
                                            <h6>VIEW</h6>
                                            <p> | </p>
                                            <ul>
                                                <li>?? ????????? ???</li>
                                                <li>?? ?????? ???</li>
                                                <li>?? ?????? ?????? ???</li>
                                                <li>?? ?????? ?????? ???</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="list-main">
                                        <div className="list-main_container">
                                            <ul>
                                                <ReviewListItem className="list-item_wrap">
                                                    <div className="reviewItem-profile">
                                                        <div className="profile-left"><img src="https://cdn.inflearn.com/public/main/profile/default_profile.png" alt="" /></div>
                                                        <div className="profile-right">
                                                            <span className="person-rate">??????????????????????????????  5</span>
                                                            <div className="profile_name">hello</div>
                                                        </div>
                                                    </div>
                                                    <div className="reviewItem-review">
                                                        <div className="review_contents">
                                                            ?????? ????????? ??????????????? ?????????. ????????? ????????? ????????????????????????.
                                                        </div>
                                                        <div className="review_info">
                                                            <span>2022.01.01</span>
                                                            <div>
                                                                <iconify-icon icon="bi:heart"></iconify-icon>
                                                                <p>5</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="reviewItem-reply">
                                                        <div className="reply-educator">
                                                            <span>???????????????</span>
                                                            <p>???????????????</p>
                                                        </div>
                                                        <div className="reply-contents">
                                                            ????????? ?????? ????????? ?????? ??? ?????????.
                                                            ?????? ??????????????? ?????????~ ?????? ???????????? ????????? ?????? ??????????????? 
                                                        </div>
                                                        <div className="review_info">
                                                            <span>2022.01.01</span>
                                                            <div>
                                                                <iconify-icon icon="bi:heart"></iconify-icon>
                                                                <p>5</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </ReviewListItem>
                                                <ReviewListItem className="list-item_wrap">
                                                    <div className="reviewItem-profile">
                                                        <div className="profile-left"><img src="https://cdn.inflearn.com/public/main/profile/default_profile.png" alt="" /></div>
                                                        <div className="profile-right">
                                                            <span className="person-rate">??????????????????????????????  5</span>
                                                            <div className="profile_name">hello</div>
                                                        </div>
                                                    </div>
                                                    <div className="reviewItem-review">
                                                        <div className="review_contents">
                                                            ?????? ????????? ??????????????? ?????????. ????????? ????????? ????????????????????????.
                                                        </div>
                                                        <div className="review_info">
                                                            <span>2022.01.01</span>
                                                            <div>
                                                                <iconify-icon icon="bi:heart"></iconify-icon>
                                                                <p>5</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="reviewItem-reply">
                                                        <div className="reply-educator">
                                                            <span>???????????????</span>
                                                            <p>???????????????</p>
                                                        </div>
                                                        <div className="reply-contents">
                                                            ????????? ?????? ????????? ?????? ??? ?????????.
                                                            ?????? ??????????????? ?????????~ ?????? ???????????? ????????? ?????? ??????????????? 
                                                        </div>
                                                        <div className="review_info">
                                                            <span>2022.01.01</span>
                                                            <div>
                                                                <iconify-icon icon="bi:heart"></iconify-icon>
                                                                <p>5</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </ReviewListItem>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </DetailReview>
                        </article>                        
                    </MidLeft>

                    <aside className="courseDetailMid-contents_right">
                        <RightCards props={state}/>
                    </aside>
                </div>                
            </section>
            <section className='courseDetail-bottom'></section>
        </Main>
    );
}




export default CourseDetail_page;

// Styled-Components 
const Main = styled.main`


    height: 100%;    

    .flex {
        display: flex;
    }
    .flex-row_center {
        display : flex ;
        align-items: center;
    }
    .flex-column {
        display: flex;
        flex-direction: column;
    }
    .hidden {
        display: none;
    }

    .courseDetail-middle {        
        position: relative;
        height: 100%;
        overflow: auto;        
    }

    .courseDetailMid-nav {
        background-color: white;
        /* position: sticky;                 */
        top: 0;
        left: 0;
        width: 100%;
        height: 42px;
    }

`

const MidLeft = styled.div`
width: 60%;
max-width: 720px;
/* background-color: pink; */
`

const DetailReview = styled.div`
    margin: 30px 0;

    .review-top {
        margin: 10px 0 25px;
    }
    .review-top_title {
        margin: 10px 0 ;
        display: flex;
        align-items: baseline;
    }
    .review-top_title h3 {
        margin-right: 20px;
        font-weight: 700;
        font-size: 22px;
        line-height: 32px;
    }
    .review-top_title span {
        font-size: 16px;
        line-height: 24px;
        color : #adb5bd;
    }
    .review-top_text {
        font-size: 15px;
        color: #495057;
    }

    .review-rate {
        display: flex;
    }
    .review-rate>div {
        border-radius: 4px;
        border: 1px solid #e9ecef;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .rate-left {
        flex: 1;
        height: 178px;
        margin-right: 6px;
    }
    .rate_total {
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 18px;
    }
    .rate_stars {
        margin-bottom: 5px;        
    }
    .rate-left p {
        font-size: 15px;
        color: #adb5bd;
    }

    .rate-right {
        flex: 2;
    }
    .rate-stick_container {
        width: 100% ;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5px;
    }
    .rate-stick_container span {
        margin-right: 10px;
        font-size: 15px;
    }
    .stick_wrap {
        background-color: #DEE2E6;
        width: 360px;
        height: 8px;
        border-radius: 10px;
    }
    .stick_percentage {
        background-color: #858E96;
        width: 60%;
        height: 8px;
        border-radius: 10px;
    }
    .five-star .stick_percentage {
        background-color: #FEC806;
    }

    .list-sort {
        border-bottom: 1px solid #495057;
    }
    .list-sort_container {
        margin: 20px 15px;
        display: flex;
        align-items: center;
    }
    .list-sort_container h6 {
        color: #495057;
        font-size: 14px;
        font-weight: 700;
    }
    .list-sort_container p {
        margin: 0 20px;
        color: #dee2e6;
    }
    .list-sort_container ul {
        display: flex;        
    }
    .list-sort_container ul li {
        margin: 0 5px;
        font-size: 14px;
        color: #adb5bd;
        cursor: pointer;
    }

`

const ReviewListItem = styled.li`

    margin: 40px 0 ;
    border-bottom: 1px solid #F8F9FA;

    .reviewItem-profile {
        display: flex; 
        margin: 20px 0;
    }
    .reviewItem-profile img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .profile-right {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .reviewItem-review {        
        margin-bottom: 20px;
    }
    .review_contents {
        margin-bottom: 15px;
    }
    .review_info {
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
        color:  #adb5bd;
    }
    .review_info , .review_info *{
        display: flex;
    }
    .review_info div * {
        margin: 0 2px;
        cursor: pointer;
    }

    .reviewItem-reply {
        margin: 20px 0;
        padding : 20px ;
        position: relative;
        background-color: #f8f9fa;        
    }
    .reviewItem-reply::after {
        /* background-color: #f8f9fa;  */
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        border: 17px solid transparent;
        border-bottom-color: #f8f9fa;
        border-top: 0;
        border-left: 0;
        /* margin-left: -11px; */
        margin-top: -17px;
        content: "";
    }
    .reply-educator {
        display: flex;
        margin-bottom: 10px;
        align-items: center;
    }
    .reply-educator span {
        padding: 3px 6px;
        color: #868e96;
        border: 1px solid #868e96;
        margin-right: 8px;
        line-height: 18px;
    }
    .reply-educator p {
        font-size: 13px;
        color:  #868e96;
    }
    .reply-contents {
        margin-bottom: 20px;
    }
`
