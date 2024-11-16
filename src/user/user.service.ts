import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async resetUserIssues(): Promise<number> {
    const { count } = await this.prismaService.user.updateMany({
      where: { hasIssues: true },
      data: { hasIssues: false },
    });
    return count;
  }
}
