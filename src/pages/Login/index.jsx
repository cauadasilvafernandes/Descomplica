import React, { useState } from 'react';
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Login = () => {
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [drawerState, setDrawerState] = useState({ left: false });

  // Função para alternar o estado da gaveta
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState({ ...drawerState, [anchor]: open });
  };

  // Conteúdo da gaveta
  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Botão para abrir a gaveta */}
      <Button variant="contained" onClick={toggleDrawer('left', true)} style={{ marginBottom: 20 }}>
        Abrir Menu
      </Button>

      {/* Componente Drawer */}
      <Drawer
        anchor="left"
        open={drawerState.left}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>

      {/* Formulário de Login */}
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="tarefa_titulo">Título da Tarefa</InputLabel>
            <Input
              id="tarefa_titulo"
              value={tituloTarefa}
              onChange={(e) => setTituloTarefa(e.target.value)}
            />
            <FormHelperText id="tarefa_titulo_helper_text">
              Insira o título da tarefa.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="tarefa_descricao">Descrição da Tarefa</InputLabel>
            <Input
              id="tarefa_descricao"
              value={descricaoTarefa}
              onChange={(e) => setDescricaoTarefa(e.target.value)}
            />
            <FormHelperText id="tarefa_descricao_helper_text">
              Insira a descrição da tarefa.
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
