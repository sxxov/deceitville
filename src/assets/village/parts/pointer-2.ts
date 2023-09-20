import pointer_2_bin from './pointer-2.bin?url';
import woods_color_jpg from './woods_color.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_specular",
		"KHR_materials_ior"
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
			"name": "pointer_2",
			"scale": [
				1.4387112855911255,
				1.4387112855911255,
				1.4387112855911255
			],
			"translation": [
				-15.433320045471191,
				9.54268741607666,
				40.13661575317383
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_specular": {
					"specularColorFactor": [
						0.215577971373942,
						0.215577971373942,
						0.215577971373942
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "wooden_color",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 0
				},
				"metallicFactor": 0
			}
		}
	],
	"meshes": [
		{
			"name": "Cube.078",
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
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"textures": [
		{
			"sampler": 0,
			"source": 0
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "woods_color",
			"uri": woods_color_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 156,
			"max": [
				0.8383300304412842,
				1.4021011590957642,
				0.9150194525718689
			],
			"min": [
				-1.04386305809021,
				-2.1965694427490234,
				-1.0613970756530762
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 156,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 156,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 522,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 1708,
			"byteOffset": 0
		}
	],
	"samplers": [
		{
			"magFilter": 9729,
			"minFilter": 9987
		}
	],
	"buffers": [
		{
			"byteLength": 1708,
			"uri": pointer_2_bin
		}
	]
}