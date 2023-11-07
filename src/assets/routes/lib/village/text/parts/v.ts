import v_bin from './v.bin?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "v",
			"rotation": [
				0.7071068286895752,
				0,
				0,
				0.7071068286895752
			]
		}
	],
	"meshes": [
		{
			"name": "Text.005",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"mode": 4
				}
			]
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 305,
			"max": [
				0.41059842705726624,
				0,
				0.28423935174942017
			],
			"min": [
				0.14637592434883118,
				0,
				-0.1342182755470276
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 305,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 305,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 909,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 2043,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 2044,
			"uri": v_bin
		}
	]
}