import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faLock } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

interface FeatureCardInfo {
  feature: string;
  description: string;
  icon: IconDefinition;
}

const FeatureCard = ({ feature, description, icon }: FeatureCardInfo) => {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: "25px",
          background: "linear-gradient(315deg, #9921e8 0%, #5f72be 74%)",
          color: "white",
          m: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 3,
          }}
        >
          <FontAwesomeIcon icon={icon} size="5x" color="#FFFFF" />
        </Box>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#FFF">
            {feature}
          </Typography>
          <Typography variant="body2" color="rgba(255,255,255,0.6)">
            {description}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" color="secondary">
            Share
          </Button>
          <Button size="small" color="secondary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default FeatureCard;
