import styled from "@emotion/styled";

const StyledMain = styled.main(({ theme }) => {
  console.log(theme);

  return {
    maxWidth: theme.pageWidth.xl,
    minHeight: "100vh",
    margin: "0 auto",
    position: "relative",
    backgroundColor: theme.palette.common.main,
    color: theme.palette.common.text,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeight,
    fontFamily: theme.typography.fontFamily,
    lineHeight: theme.typography.lineHeight,
  };
});

export default StyledMain;
