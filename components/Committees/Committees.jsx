import {
  CommitteeContainer,
  CommitteeDetails,
  CommitteeHeading,
  ExecutiveContainer,
} from "@/app/about/styles";
import React from "react";
import { BriefHeading } from "../BriefAbout/styles";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Committees = () => {
  return (
    <ExecutiveContainer sx={{ mt: "2rem" }}>
      <BriefHeading sx={{ pb: "" }}>
        <h3>Our Committees</h3>
      </BriefHeading>
      <CommitteeContainer>
        <CommitteeDetails>
          <CommitteeHeading>Outreach Committee</CommitteeHeading>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Dr. D. Irabor</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Chairperson</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Mrs. P. Ohen</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Member</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Mr. S. Ovu</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Member</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>
              Mrs. Esther Iredia
            </Typography>
            <Typography sx={{ marginLeft: 1 }}> - Member</Typography>
          </Box>
        </CommitteeDetails>

        <CommitteeDetails>
          <CommitteeHeading>Election Committee</CommitteeHeading>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Dr. M. Irabor</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Chairperson</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Mrs. P. Afolabi</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Co-Chairperson</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Mrs. A. Penn</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Member</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Dr. G. Airewele</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Member</Typography>
          </Box>
        </CommitteeDetails>

        <CommitteeDetails>
          <CommitteeHeading>Implentation/ Website Committee</CommitteeHeading>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Prof. C. Odion</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Chairperson</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Mr. Ariohuodion</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Member</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Pst. S. Ainabe</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Member</Typography>
          </Box>
        </CommitteeDetails>
        <CommitteeDetails>
          <CommitteeHeading>Welfare Committee</CommitteeHeading>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>
              Mrs. A. Omoegbele
            </Typography>
            <Typography sx={{ marginLeft: 1 }}> - Chairperson</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>
              Mrs. P. Ehikhamhen
            </Typography>
            <Typography sx={{ marginLeft: 1 }}> - Member</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>
              Mrs. B. Agbebaku
            </Typography>
            <Typography sx={{ marginLeft: 1 }}> - Member</Typography>
          </Box>
        </CommitteeDetails>
        <CommitteeDetails>
          <CommitteeHeading>Christmas Party Committee</CommitteeHeading>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Dr. D. Irabor</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Chairperson</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Mrs. O. Obeahon</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Co-Chairperson</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>
              Mrs. B. Agbebaku
            </Typography>
            <Typography sx={{ marginLeft: 1 }}> - Member</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Ms. S. Irabor</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Member</Typography>
          </Box>
        </CommitteeDetails>
        <CommitteeDetails>
          <CommitteeHeading>Publishing/ Adv. Committee</CommitteeHeading>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>
              Mrs. Adesua Penn
            </Typography>
            <Typography sx={{ marginLeft: 1 }}> - Chairperson</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Ms. Imarhiagbe</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Co-Chairperson</Typography>
          </Box>
        </CommitteeDetails>
        <CommitteeDetails>
          <CommitteeHeading>Conflict Resolution Committee</CommitteeHeading>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Pst. S. Ainabe</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Chairperson</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Prof. C. Odion</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Member</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Dr. R. Itua</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Member</Typography>
          </Box>
        </CommitteeDetails>
        <CommitteeDetails>
          <CommitteeHeading>Audit Committee</CommitteeHeading>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Mr. J. Imafidon</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Chairperson</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Mr. C. Abulu</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Member</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Mr. S. Obiomon</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Member</Typography>
          </Box>
        </CommitteeDetails>
        <CommitteeDetails>
          <CommitteeHeading>Fundraiser Committee</CommitteeHeading>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Mr. Ariohuodion</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Chairperson</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Dr. Ohen</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Member</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Mrs. P. Afolabi</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Member</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Mrs. O. Obeahon</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Member</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Ms. S. Irabor</Typography>
            <Typography sx={{ marginLeft: 1 }}> - Member</Typography>
          </Box>
        </CommitteeDetails>
      </CommitteeContainer>
    </ExecutiveContainer>
  );
};

export default Committees;
