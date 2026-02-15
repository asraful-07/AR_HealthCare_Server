import { Request, Response } from "express";
import { LoginPatientService, RegisterPatientService } from "./auth.service";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import status from "http-status";
import {
  getAccessTokenCookie,
  refreshTokenCookie,
  setBetterAuthSessionCookie,
} from "../../utils/token";

export const RegisterPatientController = catchAsync(
  async (req: Request, res: Response) => {
    const payload = req.body;

    const result = await RegisterPatientService(payload);
    const { accessToken, refreshToken, token, ...rest } = result;

    getAccessTokenCookie(res, accessToken);
    refreshTokenCookie(res, refreshToken);
    setBetterAuthSessionCookie(res, token as string);

    sendResponse(res, {
      httpStatusCode: status.CREATED,
      success: true,
      message: "Created patient successfully",
      data: {
        accessToken,
        refreshToken,
        token,
        ...rest,
      },
    });
  },
);

export const LoginPatientController = catchAsync(
  async (req: Request, res: Response) => {
    const payload = req.body;
    const result = await LoginPatientService(payload);
    const { accessToken, refreshToken, token, ...rest } = result;

    getAccessTokenCookie(res, accessToken);
    refreshTokenCookie(res, refreshToken);
    setBetterAuthSessionCookie(res, token);
    sendResponse(res, {
      httpStatusCode: status.CREATED,
      success: true,
      message: "Patient login successfully",
      data: {
        token,
        accessToken,
        refreshToken,
        ...rest,
      },
    });
  },
);
