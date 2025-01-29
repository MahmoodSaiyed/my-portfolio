import styled from "styled-components";


export const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  place-items: center;
  h2{
    text-align: center;
    margin-bottom: 2rem;
  }
  form{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    input, textarea{
      width: 60rem;
      padding: 1rem 2rem;
      border-radius: 1.6rem;
      outline: none;
      border: none;
      background:none;
      border: 1px solid #FFF;
      color: white;
      font-weight: 600;
      &::placeholder{
        color: #FFF;
      }
    }

    textarea{
      height: 20rem;
      overflow-y: auto;
      resize: none;
    }

    button{
      padding: 1rem 6rem;
      text-transform: uppercase;
    }
  
  }

  @media (max-width: 740px){
    form{
      width: 100%;
      
      input,textarea{
        width: 100%;
      }
    }
  }
`


export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: center;

  button{
    border-radius: 0.6rem;
    padding: 1rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    color: #fbfbfb;
  }
`

export const PhoneInputWrapper = styled.div`
  .react-tel-input {
    width: 100%;
    margin-bottom: 10px;
  }

  .react-tel-input .form-control {
    width: 100% !important;
    height: 45px !important;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    padding-left: 50px !important;
    background-color: #fff;
    transition: border-color 0.3s ease;
  }

  .react-tel-input .form-control:focus {
    border-color: #007bff !important;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  .react-tel-input .flag-dropdown {
    border-radius: 8px 0 0 8px;
    border: 1px solid #ccc !important;
    background-color: #f8f8f8 !important;
  }

  .react-tel-input .flag-dropdown:hover {
    background-color: #e9ecef !important;
  }

  .react-tel-input .selected-flag {
    padding: 10px !important;
  }

  .react-tel-input .selected-flag:focus {
    outline: none;
    box-shadow: none;
  }
`;