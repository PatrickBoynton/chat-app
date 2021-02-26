from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):

    def has_permission(self, request, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.owner == request.user
