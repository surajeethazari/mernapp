import { Box, Breadcrumbs, Container, Typography } from '@mui/material';
import React, { Component } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function BreadCrumbs(props) {
  const theme = useTheme();
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
    >
      {props.crumbs.map((breadcrumb, index) => (
        <div key={index}>
          {breadcrumb.active ? (
            <Link
              to={breadcrumb.trigger}
              style={{
                cursor: 'pointer',
                marginTop: '2px',
                fontSize: '18px',
                textDecoration: 'underline',
                letterSpacing: '.rem',
                color: theme.palette.secondary.main,
              }}
            >
              {breadcrumb.name}
            </Link>
          ) : (
            <div>
              <Typography
                style={{
                  cursor: 'default',
                  marginTop: '2px',
                  fontSize: '18px',
                  letterSpacing: '.rem',
                  color: theme.palette.primary.main,
                }}
              >
                {breadcrumb.name}
              </Typography>
            </div>
          )}
        </div>
      ))}
    </Breadcrumbs>
  );
}
