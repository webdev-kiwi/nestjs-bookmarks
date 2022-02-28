import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(
    @Body() dto: AuthDto,
  ) {
    await this.authService.signup(dto);
  }

  @Post('signin')
  signin() {
    this.authService.signin();
  }
}
