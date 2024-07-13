'use client';

import React from 'react';

import Key from '@mui/icons-material/Key';
import Mail from '@mui/icons-material/Mail';
import Warning from '@mui/icons-material/Warning';
import Alert from '@mui/joy/Alert';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { AuthError } from 'firebase/auth';

export default function LoginForm({
  signin,
}: {
  signin: (params: { email: string; password: string }) => Promise<void>;
}) {
  const [state, setState] = React.useState<{
    isLoading: boolean;
    error: null | AuthError;
  }>({
    isLoading: false,
    error: null,
  });
  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Sheet
        sx={{
          boxShadow: 'md',
          px: 3,
          py: 5,
          mx: 'auto',
          my: '12vh',
          borderRadius: 'sm',
          width: 375,
          maxWidth: '100%',
        }}
      >
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            setState({ isLoading: true, error: null });

            const formData = new FormData(event.currentTarget);

            try {
              await signin({
                email: formData.get('email') as string,
                password: formData.get('password') as string,
              });
            } catch (error) {
              setState({ isLoading: false, error: error as AuthError });
            }
          }}
        >
          <Stack spacing={2}>
            <Typography level="h1" fontSize="xl2">
              เข้าสู่ระบบ
            </Typography>
            <FormControl required>
              <FormLabel>อีเมล์</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="john@scrappy.com"
                startDecorator={<Mail />}
                slotProps={{ input: { 'data-testid': 'login-email' } }}
              />
            </FormControl>
            <FormControl required>
              <FormLabel>รหัสผ่าน</FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="******"
                startDecorator={<Key />}
                slotProps={{ input: { 'data-testid': 'login-password' } }}
              />
            </FormControl>
            <Button
              data-testid="login-submit"
              type="submit"
              variant="solid"
              color="primary"
              loading={state.isLoading}
            >
              Submit
            </Button>
            {state.error && (
              <Alert
                startDecorator={<Warning />}
                variant="outlined"
                color="danger"
                sx={{ bgcolor: 'danger.softBg' }}
              >
                {state.error.message}
              </Alert>
            )}
          </Stack>
        </form>
      </Sheet>
    </Box>
  );
}
