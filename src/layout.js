import React, {
    ReactElement, useContext, useEffect, useState, createRef,
  } from 'react';
  import { Button, Container, Toolbar } from '@material-ui/core';

  function LayoutComp (children){
      return(
          <>
        <nav class="navbar navbar-light bg-primary">
            <div class="container-fluid d-flex justify-content-center">
                <h5 class="navbar-brand text-white">Selçuk Üniversitesi Hatırası Programı</h5>
            </div>
        </nav>
      <Container>{children}</Container>
          </>
      )
  }
  export default LayoutComp