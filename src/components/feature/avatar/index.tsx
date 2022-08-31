import React, { LegacyRef, useEffect, useRef } from "react";
import AvatarEditor from "react-avatar-editor";
import ReactAvatarEditor from "react-avatar-editor";
import styled from "styled-components";

import MuiModal, { MuiModalProps } from "@/components/modal/mui-Modal";

export interface UploadAvatarProps extends MuiModalProps {
    image: any;
    handleChange?: any;
}

export const UploadAvatar: React.FC<UploadAvatarProps> = (props) => {
    const ref: LegacyRef<AvatarEditor> = useRef(null);

    const [avatar, setAvatar] = React.useState<any>({
        image: "",
        allowZoomOut: false,
        position: { x: 0.5, y: 0.5 },
        scale: 1,
        rotate: 0,
        borderRadius: 0,
        preview: null,
        width: 200,
        height: 200,
    });

    useEffect(() => {
        setAvatar({ ...avatar, image: props.image });
    }, [props.image]);

    const handlePositionChange = (position: any) => {
        setAvatar({ ...avatar, position });
    };

    const handleSave = () => {
        const img = ref.current?.getImageScaledToCanvas().toDataURL();

        if (props.handleChange) {
            props.handleChange(img);
        }
    };

    const handleZoom = (e: React.ChangeEvent<HTMLInputElement>) => {
        const scale = parseFloat(e.target.value);
        setAvatar({ ...avatar, scale });
    };

    return (
        <MuiModal {...props}>
            <Style.Wrapper>
                <ReactAvatarEditor
                    ref={ref}
                    scale={parseFloat(avatar.scale.toString())}
                    width={avatar.width}
                    height={avatar.height}
                    position={avatar.position}
                    onPositionChange={handlePositionChange}
                    rotate={parseFloat(avatar.rotate.toString())}
                    borderRadius={avatar.width / (100 / avatar.borderRadius)}
                    image={avatar.image}
                    className='editor-canvas'
                    color={[1, 1, 1, 0.5]}
                    border={0}
                    style={{ borderBottom: "1px solid black" }}
                />

                <input type={"range"} min='1' defaultValue='1' max='2' step='0.01' onChange={handleZoom} />
                <button onClick={handleSave}>save</button>
                {/* <div onClick={props.onCancel}>
          <CustomIconButton icon={IMG_CONFIG.BUTTON.OK} onClick={handleSave} />
        </div> */}
            </Style.Wrapper>
        </MuiModal>
    );
};

const Style = {
    Wrapper: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        min-width: 400px;
        background-color: #fadeb1;
        border-radius: 10px;
        overflow: hidden;
        transform: scale(1.3);
        @media (min-width: 768px) {
            transform: scale(1.8);
        }
        height: 350px;
        box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 1);
        -webkit-box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 1);
        -moz-box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 1);

        input {
            width: 80%;
            margin: 10px 0;
        }
    `,
};
