// En tu componente LoginForm.js
import React from "react";
import { Input, Button } from "native-base";
import { useFormik } from "formik";
import { Auth } from "../../../api";
import { useAuth } from "../../../hooks";
import { initialValues, validationSchema } from "./LoginForm.form";
import { styles } from "./LoginForm.styles";

const authController = new Auth();

export function LoginForm() {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const { email, password } = formValue;
        const { access, refresh } = await authController.login(email, password);
        await authController.setAccessToken(access);
        await authController.setRefreshToken(refresh);
        await login(access);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <>
      <Input
        placeholder="Email"
        variant="unstyled"
        autoCapitalize={false}
        value={formik.values.email}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        style={[styles.input, formik.errors.email && styles.inputError, { width: 300 }]}
      />
      <Input
        placeholder="Password"
        variant="unstyled"
        secureTextEntry
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        style={[styles.input, formik.errors.password && styles.inputError, { width: 300 }]}
      />
      <Button
        style={[styles.btn, { width: 300 }]}
        onPress={formik.handleSubmit}
        isLoading={formik.isSubmitting}
      >
        Login
      </Button>
    </>
  );
}
