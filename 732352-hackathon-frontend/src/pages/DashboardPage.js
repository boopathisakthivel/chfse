import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class DashboardPage extends React.Component {
  onCardClick = (title) => {
    window.location.href = "/#" + title;
  }
  render(){
    return(
      <>
          <h1>Outreach Reporting Application</h1>

          <p>
            Outreach Reporting Application is a system that helps client to access the Volunteering report which has the below metrics. You want to build a data driven application and empower it with analytics. The whole integration process should run smoothly. The data should be more expressive and build a dashboard with aggregated data in combination with area/bar charts, histograms, etc.
          </p>

          <Card className={'pageCard'}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Participation Metrics
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Outreach Reporting Application is a system that helps client to access the Volunteering report which has the below metrics.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={(e) => this.onCardClick("participation")}>
                View More
              </Button>
            </CardActions>
          </Card>
          <Card className={'pageCard'}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Engagement Metrics
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Outreach Reporting Application is a system that helps client to access the Volunteering report which has the below metrics.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={(e) => this.onCardClick("engagement")}>
                View More
              </Button>
            </CardActions>
          </Card>
          <Card className={'pageCard'}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Retention Metrics
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Outreach Reporting Application is a system that helps client to access the Volunteering report which has the below metrics.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={(e) => this.onCardClick("retention")}>
                View More
              </Button>
            </CardActions>
          </Card>
          <Card className={'pageCard'}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Acquisition Metrics
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Outreach Reporting Application is a system that helps client to access the Volunteering report which has the below metrics.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={(e) => this.onCardClick("acquisition")}>
                View More
              </Button>
            </CardActions>
          </Card>
          <Card className={'pageCard'}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  General Metrics
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Outreach Reporting Application is a system that helps client to access the Volunteering report which has the below metrics.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={(e) => this.onCardClick("general")}>
                View More
              </Button>
            </CardActions>
          </Card>
      </>
      )
    }
}

export default DashboardPage;