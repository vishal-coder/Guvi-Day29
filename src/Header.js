import React from 'react';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import Badge from '@mui/material/Badge';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import IconButton from '@mui/material/IconButton';

export function Header() {
  return (
    <div className="header">
      <div className="headerSectionA">
        <div className="searchEnclosure">
          <input type="text" placeholder='Search for...'></input>
          <div className="search">
            <SearchSharpIcon />
          </div>
        </div>
        <div className="iconWrapper">
          <Badge className="headerBadge" badgeContent={"3+"} fontSize="small">
            <IconButton><NotificationsSharpIcon className="headerIcon" color="action" fontSize="small" /></IconButton>
          </Badge>
          <Badge className="headerBadge" badgeContent={7} fontSize="small">
            <IconButton><EmailSharpIcon className="headerIcon" color="action" fontSize="small" /></IconButton>
          </Badge>
        </div>
      </div>
      <div className="headerSectionB">
        <div className="profileName">Douglas McGee</div>
        <div className="profileImage">
          <img src="https://th.bing.com/th/id/R.8af7b98580255f5005b8891ba3acd696?rik=9YvpfZai2XW8mQ&riu=http%3a%2f%2fwww.newsshare.in%2fwp-content%2fuploads%2f2017%2f04%2fMiniclip-8-Ball-Pool-Avatar-11.png&ehk=cJetsom3Ttaan7zmzb0UX0zMQ1Mj4Y8QU3X641ReQzU%3d&risl=&pid=ImgRaw&r=0" alt="image loading failed" />
        </div>
      </div>
    </div>
  );
}
