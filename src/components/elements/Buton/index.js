/**
 * Buton
 */
import React from 'react';
import tw, { styled, css, theme } from 'twin.macro';

export function Button(props) {
    return <StyledButton>Hello Button</StyledButton>;
}

export const StyledButton = styled.button(
    ({ isPrimary, isSecondary, isSmall }) => [
        tw`transform transition-transform duration-75`,
        tw`hocus:(scale-105 text-yellow-400)`,

        isPrimary && tw`bg-black text-white border-black`,

        isSecondary && [
            css`
                box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
            `,
            tw`border-2 border-yellow-600`,
        ],

        isSmall ? tw`text-sm` : tw`text-lg`,

        css`
            color: ${theme`colors.mine`};
        `,
    ]
);
