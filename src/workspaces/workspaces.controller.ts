import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorators/user.decorator';
import { Users } from 'src/entities/Users';
import { CreateWorkspaceDto } from 'src/users/dto/create-workspace.dto';
import { WorkspacesService } from './workspaces.service';

@ApiTags('WORKSPACE')
@Controller('api/workspaces')
export class WorkspacesController {
    constructor(
        private workspacesService: WorkspacesService
    ) {

    }
    @Get()
    getMyWorkspaces(@User() user: Users) {
        return this.workspacesService.findMyWorkspaces(user.id)
    }

    @Post()
    createWorkspace(@User() user: Users, @Body() body: CreateWorkspaceDto) {

    }

    @Get(':url/members')
    getAllMembersFromWorkspace(@Param() url: string) {
        return this.workspacesService.getWorkspaceMembers(url)
    }

    @Post(':url/members')
    inviteMembersToWorkspace() {

    }

    @Delete(':url/members/:id')
    kickMemberFromWorkspace() {

    }

    @Get(':url/members/:id')
    getMemberInfoInWorkspace() {

    }
}
