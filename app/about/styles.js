import { Button } from "@mui/material";
import { Box, styled } from "@mui/system";

export const MissionVisionContainer = styled(Box)`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 10px;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
export const ExecutiveContainer = styled(Box)`
  background-color: #b59f78;
`;
export const ExecutiveProfile = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-around;
  align-items: center;
  gap: 5px;

  @media (max-width: 1060px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const ImageAndTitle = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 2rem 0;
`;

export const ExecutiveName = styled(Box)`
  font-size: 1.5rem;
  font-weight: 400;
  color: #fff;
`;

export const ExecutiveTitle = styled(Box)`
  font-size: 1.2rem;
  font-weight: 500;
  color: #118b50;
`;

export const MeetingContainer = styled(Box)`
  padding-top: 1rem;
  padding-bottom: 5rem;
  text-align: center;
  font-size: 1.2;
`;

export const DuesButton = styled(Button)`
  color: #fff;
  background-color: #118b50;
  border-radius: 10px;
  padding: 0.5rem 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
