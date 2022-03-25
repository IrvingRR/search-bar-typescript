import styled, {css} from 'styled-components';

// Input
export const ContainerInput = styled.div`
    width: 100%;
    max-width: 300px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
    background: #fff;
    padding: 10px 20px 10px 40px;
    transition: var(--transition);
    color: var(--font-color);

    & ~ svg {
        position: absolute;
        left: 15px;
        color: var(--color-gray-light);
        font-size: 15px;
        transition: var(--transition);
    }

    &::placeholder {color: var(--color-gray-light);}
    
    &:focus ~ svg {color: var(--primary-color);}
`;

// Results
export const ListResults = styled.ul`
    width: 400px;
    height: 200px;
    border-radius: var(--radius);
    background: #fff;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: var(--transition);
    position: absolute;
    top: 50px;
    padding-top: 8px;
    overflow: auto;
    opacity: 0;
    transform: translateY(-5px);
    visibility: hidden;

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #ccc;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #ddd;
        border-radius: 30px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--primary-color);
    }

    &::before {
        content: "";
        display: block;
        width: 15px;
        height: 15px;
        transform: rotate(45deg);
        position: absolute;
        top: -8px;
        left: 0;
        right: 0;
        margin: auto;
        background: #fff;
        z-index: 100;
    }

    h4 {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        color: var(--font-color);
    }

    ${props => props.activated === 'true' && css`
        opacity: 1;
        transform: translateY(0);
        visibility: visible;
    `}
`;

// Result
export const ElementResult = styled.li`
    width: 100%;
    height: 60px;
    padding:  8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: var(--transition);
    animation: show 0.3s ease;
    delay: 0.5s;

    &:hover {background: whitesmoke;}

    @keyframes show {

        0% {
            transform: translateX(-100%);
            opacity: 0;
        }
        
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

    img {
        width: 40px;
        height: 40px;
        border-radius: 100%;
    }

    strong, p {
        color: var(--font-color);
        font-size: 12px;
    }

    p {color: var(--color-gray-light);}
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const ResultBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Button = styled.button `
    width: 30px;
    height: 100%;
    font-size: 18px;
    background: transparent;
    color: var(--font-color);

    &:hover {color: var(--primary-color);}
`;