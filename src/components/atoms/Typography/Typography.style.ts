import styled from "@emotion/styled";

export const StyledH1 = styled.h1(({ theme }) => ({
  fontSize: theme.typography.h1.fontSize,
  fontWeight: theme.typography.h1.fontWeight,
  lineHeight: theme.typography.h1.lineHeight,
}));

export const StyledH2 = styled.h2(({ theme }) => ({
  fontSize: theme.typography.h2.fontSize,
  fontWeight: theme.typography.h2.fontWeight,
  lineHeight: theme.typography.h2.lineHeight,
}));

export const StyledH3 = styled.h3(({ theme }) => ({
  fontSize: theme.typography.h3.fontSize,
  fontWeight: theme.typography.h3.fontWeight,
  lineHeight: theme.typography.h3.lineHeight,
}));

export const StyledH4 = styled.h4(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: theme.typography.h4.fontWeight,
  lineHeight: theme.typography.h4.lineHeight,
}));

export const StyledSubTitle = styled.h5(({ theme }) => ({
  fontSize: theme.typography.subTitle.fontSize,
  fontWeight: theme.typography.subTitle.fontWeight,
  lineHeight: theme.typography.subTitle.lineHeight,
}));

export const StyledBody1 = styled.p(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.body1.fontWeight,
  lineHeight: theme.typography.body1.lineHeight,
}));

export const StyledBody2 = styled.p(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.body2.fontWeight,
  lineHeight: theme.typography.body2.lineHeight,
}));
