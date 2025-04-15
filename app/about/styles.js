import { Button, Typography } from "@mui/material";
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 5px;
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

export const CommitteeContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  color: #000;
`;
export const CommitteeDetails = styled(Box)`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 10px;
  padding: 1.5rem;
  background-color: #fff;
  width: 320px;
  height: 200px;
`;
export const CommitteeHeading = styled(Box)`
  font-size: 2rem;
  text-align: center;
  padding-bottom: 10px;
  color: #118b50;
  font-weight: 500;

  @media (max-width: 1048px) {
    font-size: 1.5rem;
    padding: 1rem;
    padding-bottom: 5px;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1rem;
    padding-bottom: 5px;
  }
`;
