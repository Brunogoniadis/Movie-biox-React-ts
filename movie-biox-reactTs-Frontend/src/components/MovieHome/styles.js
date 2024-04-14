
import styled from 'styled-components';

export const MovieWrapper = styled.div`
  width: 100vw;
  height: 130vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100% ;

  background-position: center top; 
  background-repeat: no-repeat;
  position: relative;
  transition: ease 1s all;

  .maincontent{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;

    .caroselWrapper{
      width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 500;

    margin: 0;
    margin-bottom: 10%;
    }

    .mainMovieWrapper{
      align-self: flex-start;
      top: 10%;
      left: 10%;
      z-index: 500;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 5%;

      .ButtonsWrapper{
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: start;
        width: 100%;
        gap: 2%;
      }

    }

  }

  
  .bottomblur {
    width: 100%;
    height: 150px;
    position: absolute;
    top: 0;
    left: 0; 
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }


  .leftblur {
    width: 45%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0; 
    background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

  .overblur{
    width: 100%;
    height: 650px;
    position: absolute;
    bottom: 0;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); 

  }
`;

